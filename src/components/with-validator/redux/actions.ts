import {
  VALIDATE_DATA_GRAPH_REQUESTED,
  VALIDATE_DATA_GRAPH_SUCCEEDED,
  VALIDATE_DATA_GRAPH_FAILED,
  FETCH_SHAPES_COLLECTION_REQUESTED,
  FETCH_SHAPES_COLLECTION_SUCCEEDED,
  FETCH_SHAPES_COLLECTION_FAILED,
  FETCH_ONTOLOGY_COLLECTION_REQUESTED,
  FETCH_ONTOLOGY_COLLECTION_SUCCEEDED,
  FETCH_ONTOLOGY_COLLECTION_FAILED
} from './action-types';

import type {
  Definition,
  ValidationReport,
  ValidationRequest
} from '../../../types';

export function validateDataGraphRequested(request: ValidationRequest) {
  return {
    type: VALIDATE_DATA_GRAPH_REQUESTED,
    payload: {
      request
    }
  };
}

export function validateDataGraphSucceeded(validationReport: ValidationReport) {
  return {
    type: VALIDATE_DATA_GRAPH_SUCCEEDED,
    payload: {
      validationReport
    }
  };
}

export function validateDataGraphFailed(message: string) {
  return {
    type: VALIDATE_DATA_GRAPH_FAILED,
    payload: {
      message
    }
  };
}

export function fetchShapesCollectionRequested() {
  return {
    type: FETCH_SHAPES_COLLECTION_REQUESTED
  };
}

export function fetchShapesCollectionSucceeded(shapesCollection: Definition[]) {
  return {
    type: FETCH_SHAPES_COLLECTION_SUCCEEDED,
    payload: {
      shapesCollection
    }
  };
}

export function fetchShapesCollectionFailed(message: string) {
  return {
    type: FETCH_SHAPES_COLLECTION_FAILED,
    payload: {
      message
    }
  };
}

export function fetchOntologyCollectionRequested() {
  return {
    type: FETCH_ONTOLOGY_COLLECTION_REQUESTED
  };
}

export function fetchOntologyCollectionSucceeded(
  ontologyCollection: Definition[]
) {
  return {
    type: FETCH_ONTOLOGY_COLLECTION_SUCCEEDED,
    payload: {
      ontologyCollection
    }
  };
}

export function fetchOntologyCollectionFailed(message: string) {
  return {
    type: FETCH_ONTOLOGY_COLLECTION_FAILED,
    payload: {
      message
    }
  };
}
