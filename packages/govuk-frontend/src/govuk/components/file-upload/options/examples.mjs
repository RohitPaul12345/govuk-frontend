/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      id: 'file-upload-1',
      name: 'file-upload-1',
      label: {
        text: 'Upload a file'
      }
    }
  },
  {
    name: 'with hint text',
    data: {
      id: 'file-upload-2',
      name: 'file-upload-2',
      label: {
        text: 'Upload your photo'
      },
      hint: {
        text: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.'
      }
    }
  },
  {
    name: 'with error message and hint',
    data: {
      id: 'file-upload-3',
      name: 'file-upload-3',
      label: {
        text: 'Upload a file'
      },
      hint: {
        text: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.'
      },
      errorMessage: {
        text: 'Error message goes here'
      }
    }
  },
  {
    name: 'with value',
    data: {
      id: 'file-upload-4',
      name: 'file-upload-4',
      value: 'C:\\fakepath\\myphoto.jpg',
      label: {
        text: 'Upload a photo'
      }
    }
  },
  {
    name: 'with label as page heading',
    data: {
      id: 'file-upload-1',
      name: 'file-upload-1',
      label: {
        text: 'Upload a file',
        classes: 'govuk-label--l',
        isPageHeading: true
      }
    }
  },
  {
    name: 'with optional form-group classes',
    data: {
      id: 'file-upload-1',
      name: 'file-upload-1',
      label: {
        text: 'Upload a file'
      },
      formGroup: {
        classes: 'extra-class'
      }
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      id: 'file-upload-attributes',
      name: 'file-upload-attributes',
      label: {
        text: 'Upload a file'
      },
      attributes: {
        accept: '.jpg, .jpeg, .png'
      }
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      id: 'file-upload-classes',
      name: 'file-upload-classes',
      label: {
        text: 'Upload a file'
      },
      classes: 'app-file-upload--custom-modifier'
    }
  },
  {
    name: 'with describedBy',
    hidden: true,
    data: {
      id: 'file-upload-describedby',
      name: 'file-upload-describedby',
      label: {
        text: 'Upload a file'
      },
      describedBy: 'some-id'
    }
  },
  {
    name: 'with hint and describedBy',
    hidden: true,
    data: {
      id: 'file-upload-hint-describedby',
      name: 'file-upload-hint-describedby',
      label: {
        text: 'Upload a file'
      },
      describedBy: 'some-id',
      hint: {
        text: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.'
      }
    }
  },
  {
    name: 'error',
    hidden: true,
    data: {
      id: 'file-upload-with-error',
      name: 'file-upload-with-error',
      label: {
        text: 'Upload a file'
      },
      errorMessage: {
        text: 'Error message'
      }
    }
  },
  {
    name: 'with error and describedBy',
    hidden: true,
    data: {
      id: 'file-upload-error-describedby',
      name: 'file-upload-error-describedby',
      label: {
        text: 'Upload a file'
      },
      describedBy: 'some-id',
      errorMessage: {
        text: 'Error message'
      }
    }
  },
  {
    name: 'with error, describedBy and hint',
    hidden: true,
    data: {
      id: 'file-upload-error-describedby-hint',
      name: 'file-upload-error-describedby-hint',
      label: {
        text: 'Upload a file'
      },
      describedBy: 'some-id',
      errorMessage: {
        text: 'Error message'
      },
      hint: {
        text: 'hint'
      }
    }
  }
]
