// TODO Improve code with the DRY Principle and use private methods (https://javascript.info/private-protected-properties-methods)

export async function requestBookDetails(key) {
  try {
    const response = await fetch(`https://openlibrary.org${key}.json`);
    const jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
}

export async function requestSubjectsList(subject) {
  try {
    const response = await fetch(
      `https://openlibrary.org/subjects/${subject}.json?`
    );
    const jsonResponse = await response.json();
    const works = jsonResponse.works; // We only want to pass the actual books and not the 'gibberish' data that comes along.
    return works;
  } catch (error) {
    console.log(error);
  }
}
