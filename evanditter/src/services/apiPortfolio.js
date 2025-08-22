import api from "@/api";

// Skills, Experience, Education API functions (still using backend)
export async function getSkills() {
  try {
    const response = await api.get("skills/");
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getExperience() {
  try {
    const response = await api.get("experience/");
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getEducation() {
  try {
    const response = await api.get("education/");
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

// Course API functions - kept in backend for future user features
export async function getCourses(page = 1) {
  try {
    const response = await api.get(`courses/?page=${page}`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getCourse(slug) {
  try {
    const response = await api.get(`courses/${slug}/`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getFeaturedCourses() {
  try {
    const response = await api.get("featured-courses/");
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getCoursesByDifficulty(difficulty) {
  try {
    const response = await api.get(`courses/difficulty/${difficulty}/`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getFreeCourses() {
  try {
    const response = await api.get("free-courses/");
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getLesson(courseSlug, lessonSlug) {
  try {
    const response = await api.get(`courses/${courseSlug}/lessons/${lessonSlug}/`);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
}