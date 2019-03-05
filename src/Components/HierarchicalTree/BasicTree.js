import React from 'react'
import Tree, { TreeNode } from 'rc-tree'
import PropTypes from 'prop-types'
import cssAnimation from 'css-animation'
import 'rc-tree/assets/index.css'

function animate (node, show, done) {
  let height = node.offsetHeight
  return cssAnimation(node, 'collapse', {
    start () {
      if (!show) {
        node.style.height = `${node.offsetHeight}px`
      } else {
        height = node.offsetHeight
        node.style.height = 0
      }
    },
    active () {
      node.style.height = `${show ? height : 0}px`
    },
    end () {
      node.style.height = ''
      done()
    }
  })
}

const animation = {
  enter (node, done) {
    return animate(node, true, done)
  },
  leave (node, done) {
    return animate(node, false, done)
  },
  appear (node, done) {
    return animate(node, true, done)
  }
}

function loop (nodes) {
  if (!nodes || !nodes.length) {
    return null
  }

  return nodes.map((node) => {
    return (
      <TreeNode
        key={node.key}
        openAnimation={animation}
        title={node.title}
        showLine
      >
        { loop(node.children) }
      </TreeNode>
    )
  })
}

class BasicTree extends React.Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }

  render () {
    return (<div>
      <Tree
        defaultExpandAll={false}
        defaultExpandedKeys={this.props.item.defaultExpandedKeys || ['p1']}
        openAnimation={animation}
        showLine
      >
        { loop(this.props.item.data) }
      </Tree>
    </div>)
  }
}

BasicTree.propTypes = {
  item: PropTypes.object.isRequired
}

BasicTree.defaultProps = {

}

export default BasicTree
