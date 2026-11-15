[Português](Arquitetura_e_Evolucao.md) | [English](Architecture_and_Evolution.en.md) | [Español](Arquitectura_y_Evolucion.es.md)

# Architecture and evolution

## Existing foundation

The internal project contains a Next.js application with App Router and TypeScript. Its home page has a visual form. Documentation includes requirements, data studies and development guidance.

## Intended workflow

Interface → server/API validation → authorisation → database persistence → response to the interface.

This workflow is a development proposal. In this edition, the published sample demonstrates only the initial interface.

## Decisions to confirm

- Database and data access tool for the first delivery.
- Entities and rules for the first complete workflow.
- Authentication, session and permission strategy.
- Error handling, testing and acceptance criteria.
- Hosting and configuration for the future demo.

## Criteria for updating this presentation

A feature will move from planned to implemented after executable code and validation of its behaviour exist. Screenshots and demos must match the documented version.
