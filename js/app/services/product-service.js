function ProductService () {
    this.getListProductApi = function () {
        return axios ({
            url: "https://6183caff91d76c00172d1b69.mockapi.io/product-serviceBuoi22",
            method: "GET",
        })
    }
}