"use client"

import { ErrorProps } from 'app/modules/shared/domain/ErrorProps';

import { Error } from 'app/presentation/shared/components/Errors';

export default function GloablError({ reset }: ErrorProps) {
  return (
    <Error reset={reset} />
  )
}