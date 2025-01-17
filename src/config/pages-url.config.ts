class DASHBOARD {
    private root = "/";

    //links
    private createFinance = () => {
        const root = `${this.root}finance/`;
        return {
            root,
            BITCOIN: `${root}bitcoin`,
            SWIFT_CODE: `${root}swift-code`,
            COMMODITY_PRICE: `${root}commodity-price`,
            INFLATION: `${root}inflation`,
        };
    }

    private createInternet = () => {
        const root = `${this.root}internet/`;
        return {
            root,
            IP_LOOKUP: `${root}ip-lookup`,
            PASSWORD_GENERATOR: `${root}password-generator`,
            QR_CODE: `${root}qr-code`,
            VALIDATE_PHONE: `${root}validate-phone`,
        };
    }

    HOME = `${this.root}`;
    FINANCE = this.createFinance();
    INTERNET = this.createInternet();
    COMPUTER_VISION = `${this.root}computer-vision`;
    ANIMALS = `${this.root}animals`;
    ENTERTAINMENT = `${this.root}entertainment`;
    HEALTH = `${this.root}healt`;
    PLACES = `${this.root}places`;
    TEXT = `${this.root}text`;
}

export const DASHBOARD_PAGES = new DASHBOARD();