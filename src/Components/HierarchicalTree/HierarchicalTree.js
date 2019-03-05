import * as React from 'react'
import PropTypes from 'prop-types'
import './HierarchicalTree.css'
import BasicTree from './BasicTree'

class HierarchicalTree extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (
      <div className='hierarchical-tree' style={this.props.item.style}>
        <BasicTree item={this.props.item} />
      </div>
    )
  }
}

HierarchicalTree.propTypes = {
  item: PropTypes.object.isRequired
}

HierarchicalTree.defaultProps = {
  item: {
    'defaultExpandedKeys': ['p3'],
    'style': {
      height: '400px',
      width: '250px',
      border: 'solid 2px',
      overflow: 'auto',
      fontSize: '16px'
    },
    'data': [
      {
        key: 'p1',
        title: 'Administration',
        children: [
          {
            key: 'p10',
            title: 'Administration leaf 1'
          },
          {
            title: 'Administration - Child  1',
            key: 'p11',
            children: [
              {
                title: 'Administration - Child  1 of - Child  1',
                key: 'p111',
                children: [
                  {
                    title: ' Administration - Child  1 of - Child  1 leaf 1',
                    key: 'p1111'
                  },
                  {
                    title: 'Administration - Child  1 of - Child  1 leaf 2',
                    key: 'p1112'
                  }
                ]
              },
              {
                key: 'p112',
                title: 'Administration - Child  1 leaf'
              }
            ]
          }
        ]
      },
      {
        key: 'p2',
        title: 'Marketing',
        children: [
          {
            title: 'Marketing - Child  1',
            key: 'p21'
          }
        ]
      },
      {
        key: 'p3',
        title: 'Purchasing',
        children: [
          {
            key: 'p31',
            title: 'Raphaely'
          },
          {
            key: 'p32',
            title: 'Khoo'
          },
          {
            key: 'p33',
            title: 'Baida'
          },
          {
            key: 'p34',
            title: 'Himuro'
          },
          {
            key: 'p35',
            title: 'Colminiares'
          }
        ]
      },
      {
        key: 'p4',
        title: 'Human Resources',
        children: [
          {
            key: 'p4',
            title: 'Human Resources'
          }
        ]
      },
      {
        key: 'p5',
        title: 'Shipping',
        children: [
          {
            title: 'Shipping - Child  1',
            key: 'p51'
          }
        ]

      },
      {
        key: 'p6',
        title: 'IT',
        children: [
          {
            title: 'IT - Child  1',
            key: 'p61'
          }
        ]
      },
      {
        key: 'p7',
        title: 'Public Relations',
        children: [
          {
            title: 'p71',
            key: 'Public Relations - Child  1'
          }
        ]
      },
      {
        key: 'p8',
        title: 'Sales',
        children: [
          {
            title: 'p81',
            key: 'Sales - Child  1'
          }
        ]
      },
      {
        key: 'p9',
        title: 'Corporate Tax'
      },
      {
        key: 'p10',
        title: 'Treasury'
      }
    ]
  }
}

export default HierarchicalTree
