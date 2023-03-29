document.addEventListener('DOMContentLoaded', () => {

    const tds = document.querySelectorAll('.resume_table_numbers');
  
    tds.forEach(td => {
      td.textContent = Number(td.textContent).toLocaleString();
  
      const tr = td.parentNode;
  
      const newTd = document.createElement('td');
      newTd.classList.add('resume_table_numbers');
      newTd.textContent = td.textContent;
  
      tr.replaceChild(newTd, td);
    });
  });
  

  