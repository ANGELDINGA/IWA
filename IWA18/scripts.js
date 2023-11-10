// Import necessary modules and constants
import { TABLES, COLUMNS, state, html, createOrderHtml, updateDraggingHtml, moveToColumn } from './data.js';

// Event handlers
const handleDragStart = (event) => {
  const orderId = event.target.dataset.id;
  event.dataTransfer.setData('text/plain', orderId);
};

const handleDragEnd = (event) => {
  // Reset the column hover effects
  updateDraggingHtml({});
};

const handleHelpToggle = (event) => {
  const helpOverlay = html.help.overlay;
  helpOverlay.showModal();
  // Set focus on the "Close" button within the help overlay
  helpOverlay.querySelector('[data-help-cancel]').focus();
};

const handleAddToggle = (event) => {
  const addOverlay = html.add.overlay;
  const addForm = html.add.form;
  const addTitle = html.add.title;
  const addTable = html.add.table;

  if (!addOverlay.open) {
    // Clear the input fields
    addForm.reset();
    // Populate the table options
    addTable.innerHTML = '';
    addTable.appendChild(createTableOptionsHtml());
    addOverlay.showModal();
    // Set focus on the first input field
    addTitle.focus();
  } else {
    addOverlay.close();
    // Set focus back to the "Add Order" button
    html.other.add.focus();
  }
};

const handleAddSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(html.add.form);
  const title = formData.get('title');
  const table = formData.get('table');
  if (title && table) {
    // Create a new order and add it to the "Ordered" column
    const order = createOrderData({ title, table, column: 'ordered' });
    state.orders[order.id] = order;
    html.columns.ordered.appendChild(createOrderHtml(order));
    // Close the "Add Order" overlay
    html.add.overlay.close();
  }
  // Set focus back to the "Add Order" button
  html.other.add.focus();
};

const handleEditToggle = (event) => {
  const orderId = event.target.dataset.id;
  const editOverlay = html.edit.overlay;
  const editForm = html.edit.form;

  if (!editOverlay.open && orderId) {
    // Populate the "Edit Order" overlay with order details
    const order = state.orders[orderId];
    editForm.reset();
    editForm.querySelector('[data-edit-id]').value = order.id;
    editForm.querySelector('[data-edit-title]').value = order.title;
    editForm.querySelector('[data-edit-table]').value = order.table;
    editForm.querySelector('[data-edit-column]').value = order.column;
    editOverlay.showModal();
  } else {
    editOverlay.close();
  }
};

const handleEditSubmit = (event) => {
  event.preventDefault();
  const formData = new FormData(html.edit.form);
  const orderId = formData.get('id');
  const title = formData.get('title');
  const table = formData.get('table');
  const newColumn = formData.get('column');

  if (orderId && title && table) {
    // Update the order's details and move it to the new column
    const order = state.orders[orderId];
    order.title = title;
    order.table = table;
    // Move the order to the new column
    moveToColumn(orderId, newColumn);
    // Close the "Edit Order" overlay
    html.edit.overlay.close();
  }
};

const handleDelete = (event) => {
  const orderId = html.edit.form.querySelector('[data-edit-id]').value;
  if (orderId) {
    // Remove the order and close the "Edit Order" overlay
    delete state.orders[orderId];
    html.edit.overlay.close();
  }
};

// Add event listeners
html.add.cancel.addEventListener('click', handleAddToggle);
html.other.add.addEventListener('click', handleAddToggle);
html.add.form.addEventListener('submit', handleAddSubmit);

html.other.grid.addEventListener('click', handleEditToggle);
html.edit.cancel.addEventListener('click', handleEditToggle);
html.edit.form.addEventListener('submit', handleEditSubmit);
html.edit.delete.addEventListener('click', handleDelete);

html.help.cancel.addEventListener('click', handleHelpToggle);
html.other.help.addEventListener('click', handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener('dragstart', handleDragStart);
  htmlColumn.addEventListener('dragend', handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener('dragover', handleDragOver);
}
