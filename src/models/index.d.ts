import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerStations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Stations = LazyLoading extends LazyLoadingDisabled ? EagerStations : LazyStations

export declare const Stations: (new (init: ModelInit<Stations>) => Stations) & {
  copyOf(source: Stations, mutator: (draft: MutableModel<Stations>) => MutableModel<Stations> | void): Stations;
}