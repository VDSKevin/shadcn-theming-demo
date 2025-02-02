// app/page.tsx
'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { ThemeProvider, useTheme } from "@/components/theme-provider"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return (
        <div className="fixed top-4 right-4 flex gap-2">
            <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="brand-a">Brand A</SelectItem>
                    <SelectItem value="brand-b">Brand B</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

function FormExample({ className }: { className?: string }) {
    return (
        <Card className={className}>
            <CardHeader>
                <CardTitle>Form Components Example</CardTitle>
                <CardDescription>Different form components using the current theme</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label>Your name</Label>
                    <Input placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                    <Label>Email</Label>
                    <Input type="email" placeholder="Enter your email" />
                </div>
                <Button>Submit Form</Button>
            </CardContent>
        </Card>
    )
}

function DialogExample() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Dialog Example</CardTitle>
                <CardDescription>Alert dialog with the current theme</CardDescription>
            </CardHeader>
            <CardContent>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="outline">Show Dialog</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                            <AlertDialogDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Continue</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardContent>
        </Card>
    )
}

function TabsExample() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Tabs Example</CardTitle>
                <CardDescription>Tabs with different themes</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="tab1" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="tab1">Account</TabsTrigger>
                        <TabsTrigger value="tab2">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="tab1">
                        <Card>
                            <CardHeader>
                                <CardTitle>Account</CardTitle>
                                <CardDescription>
                                    Make changes to your account here. Click save when you're done.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label>Name</Label>
                                    <Input />
                                </div>
                                <div className="space-y-1">
                                    <Label>Username</Label>
                                    <Input />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save changes</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="tab2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>
                                    Change your password here. After saving, you'll be logged out.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label>Current password</Label>
                                    <Input type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label>New password</Label>
                                    <Input type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Save password</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    )
}

function MixedThemesExample() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Mixed Themes Example</CardTitle>
                <CardDescription>Components with explicitly set themes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div data-theme="brand-a" className="p-4 rounded-lg border">
                        <h3 className="text-lg font-semibold mb-2">Brand A Section</h3>
                        <div className="space-y-2">
                            <Button variant="default">Default</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Input placeholder="Brand A Input" />
                        </div>
                    </div>
                    <div data-theme="brand-b" className="p-4 rounded-lg border">
                        <h3 className="text-lg font-semibold mb-2">Brand B Section</h3>
                        <div className="space-y-2">
                            <Button variant="default">Default</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Input placeholder="Brand B Input" />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function ButtonVariantsExample() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Button Variants</CardTitle>
                <CardDescription>All available button variants in the current theme</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Button className="w-full" variant="default">Default</Button>
                        <Button className="w-full" variant="secondary">Secondary</Button>
                        <Button className="w-full" variant="outline">Outline</Button>
                        <Button className="w-full" variant="ghost">Ghost</Button>
                    </div>
                    <div className="space-y-2">
                        <Button className="w-full" variant="link">Link</Button>
                        <Button className="w-full" variant="destructive">Destructive</Button>
                        <Button className="w-full" disabled>Disabled</Button>
                        <Button className="w-full" variant="outline" disabled>Disabled Outline</Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

function DemoContent() {
    return (
        <div className="min-h-screen p-8">
            <ThemeToggle />

            <div className="max-w-6xl mx-auto space-y-8 pt-16">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-3xl">Brand Theming Demo</CardTitle>
                        <CardDescription>A comprehensive demonstration of theme switching and component styling</CardDescription>
                    </CardHeader>
                </Card>

                <div className="grid grid-cols-2 gap-8">
                    <FormExample />
                    <DialogExample />
                </div>

                <TabsExample />

                <div className="grid grid-cols-2 gap-8">
                    <ButtonVariantsExample />
                    <MixedThemesExample />
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <ThemeProvider defaultTheme="brand-a">
            <DemoContent />
        </ThemeProvider>
    )
}