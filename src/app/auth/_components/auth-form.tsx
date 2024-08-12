import { Button } from '@/components/ui/button'
import ChromeIcon from './chromeIcon'

interface AuthFormProps {
  loginAction: (formData: FormData) => Promise<void>
}

export function AuthForm({ loginAction }: AuthFormProps) {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Bem vindo
        </h1>
        <p className="mt-4 text-muted-foreground">
          Faça seu login e vote nos seus favoritos
        </p>
        <form className="mt-6" action={loginAction}>
          <Button
            data-testid="login-button"
            variant="outline"
            type="submit"
            name="action"
            value="google"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            <ChromeIcon />
            Login com Google
          </Button>
        </form>
      </div>
    </div>
  )
}
