import { Box, Grid, GridItem } from '@gr4vy/poutine-react'
import { createLink, type LinkProps } from '@tanstack/react-router'
import type { PropsWithChildren } from 'react'

const TabButton = ({
  children,
  className,
  ...rest
}: PropsWithChildren<{ className?: string } & LinkProps>) => {
  return (
    <button
      className="font-bol relative h-full w-full cursor-pointer font-bold hover:*:border-blue-60"
      {...rest}
    >
      {children}
      <div
        className={`absolute bottom-0 w-full border-b-2 ${className === 'active' ? 'border-blue-60' : 'border-transparent'}`}
      />
    </button>
  )
}

const Link = createLink(TabButton)

export const TabNav = () => {
  return (
    <Box position="sticky" bottom={0} left={0} right={0}>
      <Grid
        gridTemplateColumns={3}
        background="white"
        height={64}
        paddingX={12}
        justifyContent="space-between"
        alignItems="center"
        className="z-1000 border-t-[1px] border-gray-30"
      >
        <GridItem height="full" justifyContent="center">
          <Link to="/inline">Inline</Link>
        </GridItem>
        <GridItem height="full" justifyContent="center">
          <Link to="/overlay">Overlay</Link>
        </GridItem>
        <GridItem height="full" justifyContent="center">
          <Link to="/action-sheet">Action Sheet</Link>
        </GridItem>
      </Grid>
    </Box>
  )
}
