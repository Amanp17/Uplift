var dataTable;

$(document).ready(function () {
    loadDataTable();
});

function loadDataTable() {
    dataTable = $('#tblData').DataTable({
        "ajax": {
            "url": "/admin/category/GetAll",
            "type": "GET",
            "datatype":"json"
        },
        "columns": [
            { "data": "name", "width": "50%" },
            { "data": "displayOrder", "width": "50%" },
            {
                "data": "id",
                "render": function (data) {
                    return `<div class="text-end">
                        <a href = "/Admin/category/Upsert/${data}" class='btn btn-success text-white' style='cursor:pointer; width:100px;'>
                        </div> 
                        <i class = 'far fa-edit'> </i> Edit
                        </a>
                        &nbps;
                        <a onClick = ("/Admin/category/Delete/${data}") class='btn btn-danger text-white' style='cursor:pointer; width:100px;'>
                        </div> 
                        <i class = 'far fa-trash-alt'> </i> Delete
                        </a>
                          `;
                }, "width": "30%"
            }

        ],
        "language": {
            "emptyTable":"No Records Found."
        },
        "width":"100%"
    });
}