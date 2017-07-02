import SelectListForm from '../components/selectListForm'
import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { pick } from 'ramda' //eslint-disable-line

const SelectList = ({ lists, addWordsToList }) =>
  <SelectListForm onSubmit={(formData) => addWordsToList(formData.listId)} lists={[...lists.slice(1)]} />

SelectList.propTypes = {
  lists: PropTypes.array,
  addWordsToList: PropTypes.func
}

const mapStateToProps = state => ({
  ...pick(['lists'], state.wordsState)
})

const mapDispatchToProps = (dispatch) => ({
  addWordsToList: (payload) => dispatch({ type: 'ADD_WORDS_TO_LIST', payload })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectList)
