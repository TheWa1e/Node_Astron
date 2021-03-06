let auth0 = null;

const fetchAuthConfig = () => fetch("/auth_config.json");

const configureClient = async () => {
  const response = await fetchAuthConfig();
  const config = await response.json();

  auth0 = await createAuth0Client({
    domain: config.domain,
    client_id: config.clientId
  });
};

window.onload = async () => {
	await configureClient();
  // .. code ommited for brevity

  updateUI();

  const isAuthenticated = await auth0.isAuthenticated();

  if (isAuthenticated) {
    // show the gated content
    return;
  }
    
  // NEW - check for the code and state parameters
  const query = window.location.search;
  if (query.includes("code=") && query.includes("state=")) {

    // Process the login state
    await auth0.handleRedirectCallback();
    
    updateUI();

    // Use replaceState to redirect the user away and remove the querystring parameters
    window.history.replaceState({}, document.title, "/");
  }
  if (!(await auth0.isAuthenticated()) && document.cookie.split(';').filter(function(item) {
    return item.trim().indexOf('token_auth=') == 0
}).length) {
  login();
}

};

const updateUI = async () => {
  const isAuthenticated = await auth0.isAuthenticated();

  document.getElementById("btn-logout").disabled = !isAuthenticated;
  document.getElementById("btn-login").disabled = isAuthenticated;
  if (isAuthenticated) {
    document.getElementById("gated-content").classList.remove("hidden");
    document.getElementById("btncontainerout").classList.remove("hidden");
    document.getElementById("btncontainerin").classList.add("hidden");

    let user = JSON.parse(JSON.stringify(await auth0.getUser()));
    let token = await auth0.getTokenSilently();
    if(isAuthenticated){
      document.cookie = 'token_auth='+token;
    }

    

    //document.getElementById("ipt-access-token").innerHTML = await auth0.getTokenSilently();
    //document.getElementById("ipt-user-profile").textContent = JSON.stringify(await auth0.getUser());
    document.getElementById("name").textContent = user['name'];
    document.getElementById("picture").src = user['picture'];
  } else {
    document.getElementById("gated-content").classList.add("hidden");
  }
};

const login = async () => {
  
  await auth0.loginWithRedirect({
    redirect_uri: window.location.origin
  });
};

const logout = () => {
  document.cookie = "token_auth=123; expires= Thu, 21 Aug 2014 20:00:00 UTC"
  auth0.logout({
    returnTo: window.location.origin
  });
};
