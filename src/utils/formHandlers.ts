// Interface for contact form data
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/**
 * Validates a contact form submission
 * @param formData The form data to validate
 * @returns An object containing validation results
 */
export const validateContactForm = (formData: ContactFormData) => {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  // Name validation
  if (!formData.name.trim()) {
    errors.name = 'Name is required';
  }

  // Email validation
  if (!formData.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
    errors.email = 'Invalid email address';
  }

  // Subject validation
  if (!formData.subject.trim()) {
    errors.subject = 'Subject is required';
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
};

/**
 * Submits contact form data to the server
 * This is a placeholder function that would be replaced with actual API call
 * @param formData The form data to submit
 * @returns Promise that resolves to the submission result
 */
export const submitContactForm = async (formData: ContactFormData) => {
  // Validate form data
  const validation = validateContactForm(formData);

  if (!validation.isValid) {
    return {
      success: false,
      errors: validation.errors,
      message: 'Please correct the errors in the form',
    };
  }

  try {
    // Simulate API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Return success for demo purposes
    return {
      success: true,
      message: 'Your message has been sent successfully!',
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      message:
        'An error occurred while sending your message. Please try again later.',
    };
  }
};
