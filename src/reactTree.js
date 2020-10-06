import React from 'react';
// import { TreeTable, TreeState } from 'cp-react-tree-table';
import DeniReactTreeView from 'deni-react-treeview';
let customData = require('./customData.json');
var _ = require('lodash');


const fruitsAndVegetables = [
    {
        id: 100,
        text: 'Parent',
        children: [
            {
                id: 101,
                text: 'Child-1',
                children: [
                    {
                        id: 106,
                        text: 'Grand-child'
                    }
                ]
            },
            {
                id: 102,
                text: 'Child-2',
                isLeaf: true
            }
        ]
    },
    {
        id: 200,
        text: 'Vegetables',
        children: [
            {
                id: 201,
                text: 'Carrot',
                isLeaf: true
            },
            {
                id: 202,
                text: 'Tomato',
                isLeaf: true
            }
        ]
    }
];

const ToAJavaScriptObject = () => {
    return <DeniReactTreeView items={path_data} showIcon={false} />
}

export default ToAJavaScriptObject;