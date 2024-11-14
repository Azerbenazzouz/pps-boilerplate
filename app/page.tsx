import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code2, Database, Globe2 } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Modern Full-stack Platform
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A production-ready foundation for building scalable web applications with Next.js, Express, and modern tooling.
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <Link href="/dashboard">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs">
            <Button variant="outline" size="lg">
              Documentation
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <Card>
          <CardHeader>
            <Globe2 className="h-12 w-12 mb-4 text-primary" />
            <CardTitle>Modern Frontend</CardTitle>
            <CardDescription>Built with Next.js 13+ and Tailwind CSS</CardDescription>
          </CardHeader>
          <CardContent>
            Server and client components, file-based routing, and optimized performance out of the box.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Database className="h-12 w-12 mb-4 text-primary" />
            <CardTitle>Robust Backend</CardTitle>
            <CardDescription>Express.js with TypeScript</CardDescription>
          </CardHeader>
          <CardContent>
            Structured API routes, middleware support, and database integration with Prisma ORM.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Code2 className="h-12 w-12 mb-4 text-primary" />
            <CardTitle>Developer Experience</CardTitle>
            <CardDescription>Full TypeScript Support</CardDescription>
          </CardHeader>
          <CardContent>
            Type safety across the stack, hot reloading, and modern development tools configured.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}