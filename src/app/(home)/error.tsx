"use client";

import { ErrorProps } from "app/modules/shared/domain/ErrorProps";

export default function Error({ reset }: ErrorProps) {
  return (
    <div style={{
      padding: '10rem',
    }}>
      <h1>:c</h1>
      <p>Ha ocurrido un error</p>
      <button onClick={reset}>Intentar de nuevo</button>
    </div>
  )
}