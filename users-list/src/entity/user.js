import { COLUMNS } from '../tools/constants'

export default class User {
  constructor ({ id, name, username, email, address: _address = 'Tehran' }) {
    this.id = id
    this.name = name
    this.username = username
    this.email = email
    this._address = _address
  }

  get address () {
    return `${this._address.city} ${this._address.street} ${this._address.suite}`
  }

  remove (event) {
    event.target.parentElement.remove()
  }

  render () {
    const tr = document.createElement('tr')

    COLUMNS.forEach(column => {
      const td = document.createElement('td')
      td.textContent = this[column]

      tr.appendChild(td)
    })

    const action = document.createElement('td')
    action.textContent = 'X'
    action.style.color = 'red'
    action.style.padding = '10px'
    action.style.cursor = 'pointer'

    action.addEventListener('click', this.remove)

    tr.appendChild(action)

    return tr
  }
}
