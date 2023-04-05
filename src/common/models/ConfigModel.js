class ConfigModel { 
    static companyId = "";
    static companyName = "";
    static appName = "";
    static companyNumber = 0;
    static defaultProfileImageUrl = "";
    static defaultPageTitle = "Home Page";

    static emptyId = "00000000-0000-0000-0000-000000000000";
    static houseCompanyId = "A32B21B2-1A90-4ECA-AFAA-6E8A08C60EDD";
    static houseUserId = "";
    static isDebug = process.env.NODE_ENV !== "production";
    static environment = process.env.NODE_ENV || "unknown";

    static init(companyName, companyId, companyNumber, appName = null, defaultProfileImageUrl = "") {
        if (typeof companyName !== "string" || companyName.trim().length === 0) throw new Error("Invalid company name: " + companyName);
        if (typeof companyId !== "string" || companyId.length !== 36 || companyId === ConfigModel.emptyId) throw new Error("Invalid company id. Must be a valid Guid: " + companyId);
        if (typeof companyNumber !== "number" || companyNumber <= 0) throw new Error("Invalid company number. Must be a positive number: " + companyNumber);

        ConfigModel.companyId = companyId;
        ConfigModel.companyName = companyName;
        ConfigModel.appName = appName || (companyName + " App");
        ConfigModel.companyNumber = companyNumber;
        ConfigModel.defaultProfileImageUrl = defaultProfileImageUrl;
    }
}

export default ConfigModel;
