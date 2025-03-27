const jsonLd = {
  type: "object",
  properties: [
    {
      type: "string",
      name: "full-name",
      label: "full-name",
      value: "",
    },
    {
      type: "string",
      name: "email",
      label: "email",
      value: "",
    },
    {
      type: "select",
      name: "all-country",
      option: "country",
      value: "",
    },
    {
      type: "tel",
      name: "phone",
      label: "phone",
      value: "",
    },
    {
      type: "number",
      name: "finished-university-years",
      label: "finished-university",
      value: "",
    },
    {
      type: "string",
      name: "technology",
      label: "technology",
      value: "",
    },
    {
      type: "number",
      name: "experience",
      label: "experience",
      value: "",
    },
    {
      type: "string",
      name: "current-job",
      label: "current-job-position",
      value: "",
    },
    {
      type: "string",
      name: "plans-for-the-next-year",
      label: "plans-for-the-next-year",
      value: "",
    },
    {
      type: "string",
      name: "github",
      label: "github-profile",
      value: "",
    },
    {
      type: "string",
      name: "linkedin",
      label: "linkedin-profile",
      value: "",
    },
    {
      type: "string",
      name: "public-website",
      label: "public-website",
      value: "",
    },
    {
      type: "string",
      name: "cv",
      label: "CV Link",
      value: "",
    },
    {
      type: "string",
      name: "name",
      label: "Project Name",
      value: "",
    },
    {
      type: "string",
      name: "link",
      label: "Project Link",
      value: "",
    },
  ],
};

function generateJson() {
  jsonLd.properties.forEach((filed) => {
    const input = document.querySelector(`[name = ${filed.name}]`);
    if (input) {
      filed.value = input.value;
    }
  });
  document.getElementById("output").textContent = JSON.stringify(
    jsonLd,
    null,
    2
  );
}

function updateInputs() {
  jsonLd.properties.forEach((filed) => {
    let input = document.querySelector(`[name = '${filed.name}']`);
    if (input) {
      if (input.type !== filed.type) {
        let newInput = document.createElement("input");
        newInput.type = filed.type;
        newInput.name = filed.name;
        newInput.label = filed.label;
        newInput.value = filed.value;
        newInput.oninput = generateJson;
        input.replaceWith(newInput);
      }
    } else {
      filed.value = input.value;
    }
  });
  document.getElementById("output").addEventListener("input", () => {
    try {
      const updateJson = JSON.parse(document.getElementById("output").textContent);
      jsonLd.properties = updateJson.properties;
      updateInputs();
    } catch (error) {
      console.error("invalid JSON", error);
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  updateInputs();
  generateJson();
});
