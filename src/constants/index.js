const PUBLIC_LAYOUT = "default";

const ERR_MESSAGE = [];
ERR_MESSAGE['auth/weak-password'] = "Password is too weak!";
ERR_MESSAGE['auth/email-already-in-use'] = "The email address is already in use by another account!";
ERR_MESSAGE['auth/invalid-email'] = "The email address is invalid!";
ERR_MESSAGE['auth/invalid-login-credentials'] = "Login Failed!";

const PROFILE_OPTIONS = [
    {
        name: "My wallet",
        icon: "t2ico-wallet",
        route: {
            name: "Home",
            params: {}
        }
    },
    {
        name: "Tools",
        icon: "t2ico-ticket-star",
        route: {
            name: "Home",
            params: {}
        }
    },
    {
        name: "Privacy",
        icon: "t2ico-lock",
        route: {
            name: "Home",
            params: {}
        }
    },
    {
        name: "About",
        icon: "t2ico-info-square",
        route: {
            name: "Home",
            params: {}
        }
    },
    {
        name: "Logout",
        icon: "t2ico-logout",
        route: {
            name: "Logout",
            params: {}
        }
    }
];

const NAV_BOTTOM_ITEMS = [
    {
        icon: "t2ico-category",
        text: "Home",
        name: "Home",
    },
    {
        icon: "t2ico-chart",
        text: "Report",
        name: "Report",
    },
    {
        icon: "t2ico-presentation",
        text: "Budget",
        name: "Budget",
    },
    {
        icon: "t2ico-profile",
        text: "Profile",
        name: "Profile",
    },
];

export { PUBLIC_LAYOUT, ERR_MESSAGE, PROFILE_OPTIONS, NAV_BOTTOM_ITEMS }