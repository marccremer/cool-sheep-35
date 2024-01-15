<template>
  <main class="container">
    <form id="projectForm" @submit.prevent="e => handles(e)">
      <label for="projectId">Project ID:</label>
      <input type="text" id="projectId" name="id">

      <label for="estimatedHours">Estimated Hours:</label>
      <input type="number" id="estimatedHours" name="estimated_hours">

      <label for="budget">Budget:</label>
      <input type="number" id="budget" name="budget">

      <label for="startDate">Start Date:</label>
      <input type="datetime-local" id="startDate" name="start_date">

      <label for="status">Status:</label>
      <select id="status" name="status">
        <option value="created">Created</option>
        <option value="running">Running</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  </main>
</template>


<script setup lang="ts">

function handles(e: SubmitEvent) {
  console.log(e.target.elements)
  const data = [...e.target.elements].map(el => el.value)
  console.log(data)
  $fetch("/api/generate", { method: "post", body: getFormKeyValueObject(e.target) })
}

function getFormKeyValueObject(form) {
  var controls = form.elements;
  var keyValueObject = {};

  for (var i = 0; i < controls.length; i++) {
    var control = controls[i];

    // Check if the control has a name and is not a submit button
    if (control.name && control.type !== 'submit') {
      keyValueObject[control.name] = control.value;
    }
  }

  return keyValueObject;
}
</script>
