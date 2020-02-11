import React from "react";
import DataTable from 'react-data-table-component';
import {connect} from "react-redux";


const MyTable = (props) => {
    let data = {};

    if (!props.coins.data) {
        data = {};

    } else {
        data = props.coins.data.data.coins;
    }

    //iconUrl

    const columns = [
        {
            name: 'Icon',
            cell: row => <img style={{width: '25px', height: '25px'}} src={row.iconUrl} alt=""/>,
            width: "50px",
            sortable: false,
        },
        {
            name: 'Name',
            selector: 'name',
            sortable: true,
        },
        {
            name: 'Price',
            selector: function (row) {
                const result = Math.floor(row.price * 100) / 100;
                return "$" + result
            },
            sortable: true,

        },
        {
            name: 'Change',
            selector: 'change',
            sortable: true,
        }
    ];
    return (

        <DataTable
            title={"Cryptocurrency prices"}
            columns={columns}
            data={data}
            pagination
            highlightOnHover
            pointerOnHover
            noDataComponent={"Loading..."}
            style={{
                backgroundColor: "#011e3e",
                textAlign: 'center'
            }}
            onRowClicked={function () {
                console.log("click")
            }}
            //noHeader

        />
    );
};


const mapStateToProps = (state) => {
    return {
        coins: state.coins
    }
};

export default connect(mapStateToProps)(MyTable)
