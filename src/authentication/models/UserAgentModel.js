class UserAgentModel { 
    static Browsers = {
        chrome: { searchTerm: "Chrome", name: "Chrome", browser: "chrome" },
        firefox: { searchTerm: "Firefox", name: "Firefox", browser: "firefox" },
        edge: { searchTerm: "Edge", name: "Edge", browser: "edge" },
        ie: { searchTerm: "IE", name: "Internet Explorer", browser: "ie" },
        safari: { searchTerm: "Safari", name: "Safari", browser: "safari" },
        brave: { searchTerm: "Brave", name: "Brave", browser: "brave" },
        vivaldi: { searchTerm: "Vivaldi", name: "Vivaldi", browser: "vivaldi" },
        yandex: { searchTerm: "Yandex", name: "Yandex", browser: "yandex" },
        chromium: { searchTerm: "Chromium", name: "Chromium", browser: "chromium" },
        opera: { searchTerm: "Opera", name: "Opera", browser: "opera" },
    };

    static operaVariants = {
        operaMini: { key: "Opera Mini", name: "Opera Mini" },
        operaTouch: { key: "Opera Touch", name: "Opera Touch" },
        operaMobi: { key: "Opera Mobi", name: "Opera Mobi" },
        operaCoast: { key: "Opera Coast", name: "Opera Coast" },
        operaTV: { key: "Opera TV", name: "Opera TV" },
        operaGX: { key: "Opera GX", name: "Opera GX" },
        operaNeon: { key: "Opera Neon", name: "Opera Neon" },
        operaLuna: { key: "Opera Luna", name: "Opera Luna" },
        operaKid: { key: "Opera Kid", name: "Opera Kid" },
        operaMiniIOS: { key: "Opera Mini iOS", name: "Opera Mini iOS" },
        operaTouchIOS: { key: "Opera Touch iOS", name: "Opera Touch iOS" },
        operaMobiIOS: { key: "Opera Mobi iOS", name: "Opera Mobi iOS" },
        operaCoastIOS: { key: "Opera Coast iOS", name: "Opera Coast iOS" },
        operaTVIOS: { key: "Opera TV iOS", name: "Opera TV iOS" },
        operaGXIOS: { key: "Opera GX iOS", name: "Opera GX iOS" },
        operaNeonIOS: { key: "Opera Neon iOS", name: "Opera Neon iOS" },

        operaLunaIOS: { key: "Opera Luna iOS", name: "Opera Luna iOS" },
        operaKidIOS: { key: "Opera Kid iOS", name: "Opera Kid iOS" },
        operaMiniAndroid: { key: "Opera Mini Android", name: "Opera Mini Android" },
        operaTouchAndroid: { key: "Opera Touch Android", name: "Opera Touch Android" },
        operaMobiAndroid: { key: "Opera Mobi Android", name: "Opera Mobi Android" },
        operaCoastAndroid: { key: "Opera Coast Android", name: "Opera Coast Android" },
        operaTVAndroid: { key: "Opera TV Android", name: "Opera TV Android" },
        operaGXAndroid: { key: "Opera GX Android", name: "Opera GX Android" },
        operaNeonAndroid: { key: "Opera Neon Android", name: "Opera Neon Android" },
        operaLunaAndroid: { key: "Opera Luna Android", name: "Opera Luna Android" },
        operaKidAndroid: { key: "Opera Kid Android", name: "Opera Kid Android" },
        operaMiniLinux: { key: "Opera Mini Linux", name: "Opera Mini Linux" },
        operaTouchLinux: { key: "Opera Touch Linux", name: "Opera Touch Linux" },
        operaMobiLinux: { key: "Opera Mobi Linux", name: "Opera Mobi Linux" },
        operaCoastLinux: { key: "Opera Coast Linux", name: "Opera Coast Linux" },
        operaTVLinux: { key: "Opera TV Linux", name: "Opera TV Linux" },
        operaGXLinux: { key: "Opera GX Linux", name: "Opera GX Linux" },
        operaNeonLinux: { key: "Opera Neon Linux", name: "Opera Neon Linux" },
        operaLunaLinux: { key: "Opera Luna Linux", name: "Opera Luna Linux" },
        operaKidLinux: { key: "Opera Kid Linux", name: "Opera Kid Linux" },
        operaMiniWindows: { key: "Opera Mini Windows", name: "Opera Mini Windows" },
        operaTouchWindows: { key: "Opera Touch Windows", name: "Opera Touch Windows" },
        operaMobiWindows: { key: "Opera Mobi Windows", name: "Opera Mobi Windows" },
        operaCoastWindows: { key: "Opera Coast Windows", name: "Opera Coast Windows" },
        operaTVWindows: { key: "Opera TV Windows", name: "Opera TV Windows" },
        operaGXWindows: { key: "Opera GX Windows", name: "Opera GX Windows" },
        operaNeonWindows: { key: "Opera Neon Windows", name: "Opera Neon Windows" },
        operaLunaWindows: { key: "Opera Luna Windows", name: "Opera Luna Windows" },
        operaKidWindows: { key: "Opera Kid Windows", name: "Opera Kid Windows" },
        operaMiniMac: { key: "Opera Mini Mac", name: "Opera Mini Mac" },
        operaTouchMac: { key: "Opera Touch Mac", name: "Opera Touch Mac" },
        operaMobiMac: { key: "Opera Mobi Mac", name: "Opera Mobi Mac" },
        operaCoastMac: { key: "Opera Coast Mac", name: "Opera Coast Mac" },
        operaTVMac: { key: "Opera TV Mac", name: "Opera TV Mac" },
        operaGXMac: { key: "Opera GX Mac", name: "Opera GX Mac" },
        operaNeonMac: { key: "Opera Neon Mac", name: "Opera Neon Mac" },
        operaLunaMac: { key: "Opera Luna Mac", name: "Opera Luna Mac" },
        operaKidMac: { key: "Opera Kid Mac", name: "Opera Kid Mac" },
        operaMiniBSD: { key: "Opera Mini BSD", name: "Opera Mini BSD" },
        operaTouchBSD: { key: "Opera Touch BSD", name: "Opera Touch BSD" },
        operaMobiBSD: { key: "Opera Mobi BSD", name: "Opera Mobi BSD" },
        operaCoastBSD: { key: "Opera Coast BSD", name: "Opera Coast BSD" },
        operaTVBSD: { key: "Opera TV BSD", name: "Opera TV BSD" },
        operaGXBSD: { key: "Opera GX BSD", name: "Opera GX BSD" },
        operaNeonBSD: { key: "Opera Neon BSD", name: "Opera Neon BSD" },
        operaLunaBSD: { key: "Opera Luna BSD", name: "Opera Luna BSD" },
        operaKidBSD: { key: "Opera Kid BSD", name: "Opera Kid BSD" },
        operaMiniChromeOS: { key: "Opera Mini Chrome OS", name: "Opera Mini Chrome OS" },
        operaTouchChromeOS: { key: "Opera Touch Chrome OS", name: "Opera Touch Chrome OS" },
        operaMobiChromeOS: { key: "Opera Mobi Chrome OS", name: "Opera Mobi Chrome OS" },
        operaCoastChromeOS: { key: "Opera Coast Chrome OS", name: "Opera Coast Chrome OS" },
        operaTVChromeOS: { key: "Opera TV Chrome OS", name: "Opera TV Chrome OS" },
        operaGXChromeOS: { key: "Opera GX Chrome OS", name: "Opera GX Chrome OS" },
        operaNeonChromeOS: { key: "Opera Neon Chrome OS", name: "Opera Neon Chrome OS" },
        operaLunaChromeOS: { key: "Opera Luna Chrome OS", name: "Opera Luna Chrome OS" },
        operaKidChromeOS: { key: "Opera Kid Chrome OS", name: "Opera Kid Chrome OS" },
        operaMiniWebOS: { key: "Opera Mini Web OS", name: "Opera Mini Web OS" },
        operaTouchWebOS: { key: "Opera Touch Web OS", name: "Opera Touch Web OS" },
        operaMobiWebOS: { key: "Opera Mobi Web OS", name: "Opera Mobi Web OS" },
        operaCoastWebOS: { key: "Opera Coast Web OS", name: "Opera Coast Web OS" },
        operaTVWebOS: { key: "Opera TV Web OS", name: "Opera TV Web OS" },
        operaGXWebOS: { key: "Opera GX Web OS", name: "Opera GX Web OS" },
        operaNeonWebOS: { key: "Opera Neon Web OS", name: "Opera Neon Web OS" },
        operaLunaWebOS: { key: "Opera Luna Web OS", name: "Opera Luna Web OS" },
        operaKidWebOS: { key: "Opera Kid Web OS", name: "Opera Kid Web OS" },
        operaMiniSolaris: { key: "Opera Mini Solaris", name: "Opera Mini Solaris" },
        operaTouchSolaris: { key: "Opera Touch Solaris", name: "Opera Touch Solaris" },
        operaMobiSolaris: { key: "Opera Mobi Solaris", name: "Opera Mobi Solaris" },
        operaCoastSolaris: { key: "Opera Coast Solaris", name: "Opera Coast Solaris" },
        operaTVSolaris: { key: "Opera TV Solaris", name: "Opera TV Solaris" },
        operaGXSolaris: { key: "Opera GX Solaris", name: "Opera GX Solaris" },
        operaNeonSolaris: { key: "Opera Neon Solaris", name: "Opera Neon Solaris" },
        operaLunaSolaris: { key: "Opera Luna Solaris", name: "Opera Luna Solaris" },
        operaKidSolaris: { key: "Opera Kid Solaris", name: "Opera Kid Solaris" },
        operaMiniUnix: { key: "Opera Mini Unix", name: "Opera Mini Unix" },
        operaTouchUnix: { key: "Opera Touch Unix", name: "Opera Touch Unix" },
        operaMobiUnix: { key: "Opera Mobi Unix", name: "Opera Mobi Unix" },
        operaCoastUnix: { key: "Opera Coast Unix", name: "Opera Coast Unix" },
        operaTVUnix: { key: "Opera TV Unix", name: "Opera TV Unix" },
        operaGXUnix: { key: "Opera GX Unix", name: "Opera GX Unix" },
        operaNeonUnix: { key: "Opera Neon Unix", name: "Opera Neon Unix" },
        operaLunaUnix: { key: "Opera Luna Unix", name: "Opera Luna Unix" },
        operaKidUnix: { key: "Opera Kid Unix", name: "Opera Kid Unix" },
        operaMiniBSDi: { key: "Opera Mini BSDi", name: "Opera Mini BSDi" },
        operaTouchBSDi: { key: "Opera Touch BSDi", name: "Opera Touch BSDi" },
        operaMobiBSDi: { key: "Opera Mobi BSDi", name: "Opera Mobi BSDi" },
        operaCoastBSDi: { key: "Opera Coast BSDi", name: "Opera Coast BSDi" },
        operaTVBSDi: { key: "Opera TV BSDi", name: "Opera TV BSDi" },
        operaGXBSDi: { key: "Opera GX BSDi", name: "Opera GX BSDi" },
        operaNeonBSDi: { key: "Opera Neon BSDi", name: "Opera Neon BSDi" },
        operaLunaBSDi: { key: "Opera Luna BSDi", name: "Opera Luna BSDi" },
        operaKidBSDi: { key: "Opera Kid BSDi", name: "Opera Kid BSDi" },
        operaMiniOpenBSD: { key: "Opera Mini Open BSD", name: "Opera Mini Open BSD" },
        operaTouchOpenBSD: { key: "Opera Touch Open BSD", name: "Opera Touch Open BSD" },
        operaMobiOpenBSD: { key: "Opera Mobi Open BSD", name: "Opera Mobi Open BSD" },
        operaCoastOpenBSD: { key: "Opera Coast Open BSD", name: "Opera Coast Open BSD" },
        operaTVOpenBSD: { key: "Opera TV Open BSD", name: "Opera TV Open BSD" },
        operaGXOpenBSD: { key: "Opera GX Open BSD", name: "Opera GX Open BSD" },
        operaNeonOpenBSD: { key: "Opera Neon Open BSD", name: "Opera Neon Open BSD" },
    };
 
    constructor(json) { 
        if (typeof json === "string") {
            json = { userAgent: json };
        } else if (typeof json !== "object") {
            json = {};
        }

        this.userAgent = (json.userAgent || json.user_agent) || "Unknown";

        const br = UserAgentModel.find(this.userAgent);

        this.name = br?.name || "Unknown";
        this.isMobile = this.userAgent.indexOf("iPhone;" || "Android") > -1;
        this.browser = br?.browser || null;
    }

    static find(description) {
        for (let key in UserAgentModel.Browsers) {
            const searchData = UserAgentModel.Browsers[key].searchTerm;

            if (description.indexOf(searchData) >= 0) {
                return { ...UserAgentModel.Browsers[key] };
            }
        }

        return null;
     }
    
}

export default UserAgentModel;
