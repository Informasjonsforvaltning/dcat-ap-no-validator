import React, {
  memo,
  FC,
  useState,
  ChangeEventHandler,
  FormEventHandler
} from 'react';
import { compose } from 'redux';
import { useDropzone } from 'react-dropzone';

import Translation from '../translation';

import SC from './styled';

import type { ValidationRequest } from '../../types';

interface ExternalProps {
  url?: string;
  isLoading: boolean;
  onValidate: (request: ValidationRequest) => void;
}

interface Props extends ExternalProps {}

const ValidationInputForm: FC<Props> = ({
  url: externalUrl,
  isLoading,
  onValidate,
  ...props
}) => {
  const [inputFile, setInputFile] = useState<File | null>(null);
  const [inputUrl, setInputUrl] = useState(externalUrl ?? '');
  const [inputText, setInputText] = useState('');

  const validateInput = () => {
    if (inputFile || inputUrl || inputText) {
      onValidate({
        resource:
          inputFile ||
          inputUrl ||
          new File([inputText], 'data-graph.rdf', {
            type: 'text/plain'
          }),
        config: { expand: true, includeExpandedTriples: false }
      });
    }
  };

  const removeInputFile = () => setInputFile(null);

  const handleInputUrlChange: ChangeEventHandler<HTMLInputElement> = ({
    target
  }) => setInputUrl(target.value);

  const handleInputTextChange: ChangeEventHandler<HTMLTextAreaElement> = ({
    target
  }) => setInputText(target.value);

  const handleSubmitForm: FormEventHandler = e => {
    e.preventDefault();
    validateInput();
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open: openFileSelector
  } = useDropzone({
    onDropAccepted: ([file]) => {
      if (!isLoading) {
        setInputFile(file);
        setInputUrl('');
        setInputText('');
      }
    },
    maxFiles: 1,
    noClick: true,
    noKeyboard: true
  });
  return (
    <SC.ValidationInputForm {...props} onSubmit={handleSubmitForm}>
      <SC.DropZone {...getRootProps({ isDragActive, disabled: isLoading })}>
        <input {...getInputProps()} />
        {isDragActive && (
          <p>
            <Translation id='Slipp filen her' />
          </p>
        )}
        {!inputFile && !isDragActive && (
          <>
            <p>
              <Translation id='Slipp DCAT-fil i Turtle eller JSON-LD format her' />
            </p>
            <p>
              <Translation id='eller' />
            </p>
            <SC.Button onClick={openFileSelector}>
              <Translation id='Bla gjennom filer på maskina' />
            </SC.Button>
          </>
        )}
        {inputFile && !isDragActive && (
          <SC.Row>
            <SC.UploadedFileIcon />
            <p>
              <Translation id='Fil lastet opp' />
            </p>
            <SC.Button onClick={openFileSelector}>
              <Translation id='Velg en annen fil' />
            </SC.Button>
            <SC.Button onClick={removeInputFile}>
              <Translation id='Slett fil' />
            </SC.Button>
          </SC.Row>
        )}
      </SC.DropZone>
      <SC.TextInput>
        <textarea
          placeholder='Skriv eller lim inn rdf data'
          value={inputText}
          onChange={handleInputTextChange}
          disabled={!!inputFile || !!inputUrl || isLoading}
        />
      </SC.TextInput>
      <SC.LinkInput>
        <input
          type='text'
          placeholder='Last inn fil via lenke'
          value={inputFile?.name ?? inputUrl}
          onChange={handleInputUrlChange}
          disabled={!!inputFile || !!inputText || isLoading}
        />
        <SC.Button
          onClick={validateInput}
          disabled={isLoading || !(inputFile || inputUrl || inputText)}
        >
          {isLoading ? <SC.Spinner /> : <Translation id='Valider' />}
        </SC.Button>
      </SC.LinkInput>
    </SC.ValidationInputForm>
  );
};
export default compose<FC<ExternalProps>>(memo)(ValidationInputForm);
