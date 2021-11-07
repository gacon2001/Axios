var service = new ProductService();

function getListProduct () {
  service.getListProductApi()
  .then(function (success) {
    console.log(success.data);
    renderData (success.data);
  })
  .catch(function (error) {
    console.log(error);
  })
}
getListProduct();

function renderData (data) {
  var html ="";
  data.forEach (function (item) {
    html += `
    <tr>
    <td>${item.id}</td>
    <td>${item.tenSP}</td>
    <td>${item.gia}</td>
    <td>
      <img width="100" src="../../../assets/img/${item.hinhAnh}"/>
    </td>
    <td>${item.moTa}</td>   
  </tr>
    `
  })
  document.getElementById("tblDanhSachSP").innerHTML= html;
}
