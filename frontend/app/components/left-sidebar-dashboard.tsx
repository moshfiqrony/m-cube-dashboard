import { Link } from '@remix-run/react';
import { Badge } from '~/components/ui/badge';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from '~/components/ui/breadcrumb';
import { Button } from '~/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '~/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '~/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '~/components/ui/sheet';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '~/components/ui/table';
import { Textarea } from '~/components/ui/textarea';
import { ToggleGroup, ToggleGroupItem } from '~/components/ui/toggle-group';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '~/components/ui/tooltip';

export function LeftSidebarDashboard() {
    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
            <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
                <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
                    <TooltipProvider>
                        <Link
                            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                            to="#"
                        >
                            <Package2Icon className="h-4 w-4 transition-all group-hover:scale-110" />
                            <span className="sr-only">MCube</span>
                        </Link>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    to="#"
                                >
                                    <HomeIcon className="h-5 w-5" />
                                    <span className="sr-only">Dashboard</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Dashboard
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    to="#"
                                >
                                    <ShoppingCartIcon className="h-5 w-5" />
                                    <span className="sr-only">Orders</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">Orders</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    to="#"
                                >
                                    <PackageIcon className="h-5 w-5" />
                                    <span className="sr-only">Products</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Products
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    to="#"
                                >
                                    <UsersIcon className="h-5 w-5" />
                                    <span className="sr-only">Customers</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Customers
                            </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    to="#"
                                >
                                    <LineChartIcon className="h-5 w-5" />
                                    <span className="sr-only">Analytics</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Analytics
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
                <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                                    to="#"
                                >
                                    <SettingsIcon className="h-5 w-5" />
                                    <span className="sr-only">Settings</span>
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                Settings
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </nav>
            </aside>
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                className="sm:hidden"
                                size="icon"
                                variant="outline"
                            >
                                <PanelLeftIcon className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="sm:max-w-xs" side="left">
                            <nav className="grid gap-6 text-lg font-medium">
                                <Link
                                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                                    to="#"
                                >
                                    <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
                                    <span className="sr-only">MCube</span>
                                </Link>
                                <Link
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    to="#"
                                >
                                    <HomeIcon className="h-5 w-5" />
                                    Dashboard
                                </Link>
                                <Link
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    to="#"
                                >
                                    <ShoppingCartIcon className="h-5 w-5" />
                                    Orders
                                </Link>
                                <Link
                                    className="flex items-center gap-4 px-2.5 text-foreground"
                                    to="#"
                                >
                                    <PackageIcon className="h-5 w-5" />
                                    Products
                                </Link>
                                <Link
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    to="#"
                                >
                                    <UsersIcon className="h-5 w-5" />
                                    Customers
                                </Link>
                                <Link
                                    className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                                    to="#"
                                >
                                    <LineChartIcon className="h-5 w-5" />
                                    Settings
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>
                    <Breadcrumb className="hidden md:flex">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="#">Dashboard</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link to="#">Products</Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>Edit Product</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                    <div className="relative ml-auto flex-1 md:grow-0">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                            placeholder="Search..."
                            type="search"
                        />
                    </div>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                className="overflow-hidden rounded-full"
                                size="icon"
                                variant="outline"
                            >
                                <img
                                    alt="Avatar"
                                    className="overflow-hidden rounded-full"
                                    height={36}
                                    src="/placeholder.jpeg"
                                    style={{
                                        aspectRatio: '36/36',
                                        objectFit: 'cover',
                                    }}
                                    width={36}
                                />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </header>
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                        <div className="flex items-center gap-4">
                            <Button
                                className="h-7 w-7"
                                size="icon"
                                variant="outline"
                            >
                                <ChevronLeftIcon className="h-4 w-4" />
                                <span className="sr-only">Back</span>
                            </Button>
                            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                                Pro Controller
                            </h1>
                            <Badge
                                className="ml-auto sm:ml-0"
                                variant="outline"
                            >
                                In stock
                            </Badge>
                            <div className="hidden items-center gap-2 md:ml-auto md:flex">
                                <Button size="sm" variant="outline">
                                    Discard
                                </Button>
                                <Button size="sm">Save Product</Button>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                                <Card x-chunk="dashboard-07-chunk-0">
                                    <CardHeader>
                                        <CardTitle>Product Details</CardTitle>
                                        <CardDescription>
                                            Lipsum dolor sit amet, consectetur
                                            adipiscing elit
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="grid gap-3">
                                                <Label htmlFor="name">
                                                    Name
                                                </Label>
                                                <Input
                                                    className="w-full"
                                                    defaultValue="Gamer Gear Pro Controller"
                                                    id="name"
                                                    type="text"
                                                />
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="description">
                                                    Description
                                                </Label>
                                                <Textarea
                                                    className="min-h-32"
                                                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                                                    id="description"
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card x-chunk="dashboard-07-chunk-1">
                                    <CardHeader>
                                        <CardTitle>Stock</CardTitle>
                                        <CardDescription>
                                            Lipsum dolor sit amet, consectetur
                                            adipiscing elit
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead className="w-[100px]">
                                                        SKU
                                                    </TableHead>
                                                    <TableHead>Stock</TableHead>
                                                    <TableHead>Price</TableHead>
                                                    <TableHead className="w-[100px]">
                                                        Size
                                                    </TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell className="font-semibold">
                                                        GGPC-001
                                                    </TableCell>
                                                    <TableCell>
                                                        <Label
                                                            className="sr-only"
                                                            htmlFor="stock-1"
                                                        >
                                                            Stock
                                                        </Label>
                                                        <Input
                                                            defaultValue="100"
                                                            id="stock-1"
                                                            type="number"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <Label
                                                            className="sr-only"
                                                            htmlFor="price-1"
                                                        >
                                                            Price
                                                        </Label>
                                                        <Input
                                                            defaultValue="99.99"
                                                            id="price-1"
                                                            type="number"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <ToggleGroup
                                                            defaultValue="s"
                                                            type="single"
                                                            variant="outline"
                                                        >
                                                            <ToggleGroupItem value="s">
                                                                S
                                                            </ToggleGroupItem>
                                                            <ToggleGroupItem value="m">
                                                                M
                                                            </ToggleGroupItem>
                                                            <ToggleGroupItem value="l">
                                                                L
                                                            </ToggleGroupItem>
                                                        </ToggleGroup>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-semibold">
                                                        GGPC-002
                                                    </TableCell>
                                                    <TableCell>
                                                        <Label
                                                            className="sr-only"
                                                            htmlFor="stock-2"
                                                        >
                                                            Stock
                                                        </Label>
                                                        <Input
                                                            defaultValue="143"
                                                            id="stock-2"
                                                            type="number"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <Label
                                                            className="sr-only"
                                                            htmlFor="price-2"
                                                        >
                                                            Price
                                                        </Label>
                                                        <Input
                                                            defaultValue="99.99"
                                                            id="price-2"
                                                            type="number"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <ToggleGroup
                                                            defaultValue="m"
                                                            type="single"
                                                            variant="outline"
                                                        >
                                                            <ToggleGroupItem value="s">
                                                                S
                                                            </ToggleGroupItem>
                                                            <ToggleGroupItem value="m">
                                                                M
                                                            </ToggleGroupItem>
                                                            <ToggleGroupItem value="l">
                                                                L
                                                            </ToggleGroupItem>
                                                        </ToggleGroup>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell className="font-semibold">
                                                        GGPC-003
                                                    </TableCell>
                                                    <TableCell>
                                                        <Label
                                                            className="sr-only"
                                                            htmlFor="stock-3"
                                                        >
                                                            Stock
                                                        </Label>
                                                        <Input
                                                            defaultValue="32"
                                                            id="stock-3"
                                                            type="number"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <Label
                                                            className="sr-only"
                                                            htmlFor="price-3"
                                                        >
                                                            Stock
                                                        </Label>
                                                        <Input
                                                            defaultValue="99.99"
                                                            id="price-3"
                                                            type="number"
                                                        />
                                                    </TableCell>
                                                    <TableCell>
                                                        <ToggleGroup
                                                            defaultValue="s"
                                                            type="single"
                                                            variant="outline"
                                                        >
                                                            <ToggleGroupItem value="s">
                                                                S
                                                            </ToggleGroupItem>
                                                            <ToggleGroupItem value="m">
                                                                M
                                                            </ToggleGroupItem>
                                                            <ToggleGroupItem value="l">
                                                                L
                                                            </ToggleGroupItem>
                                                        </ToggleGroup>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardContent>
                                    <CardFooter className="justify-center border-t p-4">
                                        <Button
                                            className="gap-1"
                                            size="sm"
                                            variant="ghost"
                                        >
                                            <CirclePlusIcon className="h-3.5 w-3.5" />
                                            Add Variant
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card x-chunk="dashboard-07-chunk-2">
                                    <CardHeader>
                                        <CardTitle>Product Category</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6 sm:grid-cols-3">
                                            <div className="grid gap-3">
                                                <Label htmlFor="category">
                                                    Category
                                                </Label>
                                                <Select>
                                                    <SelectTrigger
                                                        aria-label="Select category"
                                                        id="category"
                                                    >
                                                        <SelectValue placeholder="Select category" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="clothing">
                                                            Clothing
                                                        </SelectItem>
                                                        <SelectItem value="electronics">
                                                            Electronics
                                                        </SelectItem>
                                                        <SelectItem value="accessories">
                                                            Accessories
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="subcategory">
                                                    Subcategory (optional)
                                                </Label>
                                                <Select>
                                                    <SelectTrigger
                                                        aria-label="Select subcategory"
                                                        id="subcategory"
                                                    >
                                                        <SelectValue placeholder="Select subcategory" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="t-shirts">
                                                            T-Shirts
                                                        </SelectItem>
                                                        <SelectItem value="hoodies">
                                                            Hoodies
                                                        </SelectItem>
                                                        <SelectItem value="sweatshirts">
                                                            Sweatshirts
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                                <Card x-chunk="dashboard-07-chunk-3">
                                    <CardHeader>
                                        <CardTitle>Product Status</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-6">
                                            <div className="grid gap-3">
                                                <Label htmlFor="status">
                                                    Status
                                                </Label>
                                                <Select>
                                                    <SelectTrigger
                                                        aria-label="Select status"
                                                        id="status"
                                                    >
                                                        <SelectValue placeholder="Select status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="draft">
                                                            Draft
                                                        </SelectItem>
                                                        <SelectItem value="published">
                                                            Active
                                                        </SelectItem>
                                                        <SelectItem value="archived">
                                                            Archived
                                                        </SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card
                                    className="overflow-hidden"
                                    x-chunk="dashboard-07-chunk-4"
                                >
                                    <CardHeader>
                                        <CardTitle>Product Images</CardTitle>
                                        <CardDescription>
                                            Lipsum dolor sit amet, consectetur
                                            adipiscing elit
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid gap-2">
                                            <img
                                                alt="Product image"
                                                className="aspect-square w-full rounded-md object-cover"
                                                height="300"
                                                src="/product/product-1.jpg"
                                                width="300"
                                            />
                                            <div className="grid grid-cols-3 gap-2">
                                                <button>
                                                    <img
                                                        alt="Product image"
                                                        className="aspect-square w-full rounded-md object-cover"
                                                        height="84"
                                                        src="/product/product-1.jpg"
                                                        width="84"
                                                    />
                                                </button>
                                                <button>
                                                    <img
                                                        alt="Product image"
                                                        className="aspect-square w-full rounded-md object-cover"
                                                        height="84"
                                                        src="/product/product-1.jpg"
                                                        width="84"
                                                    />
                                                </button>
                                                <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                                                    <UploadIcon className="h-4 w-4 text-muted-foreground" />
                                                    <span className="sr-only">
                                                        Upload
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card x-chunk="dashboard-07-chunk-5">
                                    <CardHeader>
                                        <CardTitle>Archive Product</CardTitle>
                                        <CardDescription>
                                            Lipsum dolor sit amet, consectetur
                                            adipiscing elit.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div />
                                        <Button size="sm" variant="secondary">
                                            Archive Product
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 md:hidden">
                            <Button size="sm" variant="outline">
                                Discard
                            </Button>
                            <Button size="sm">Save Product</Button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

function ChevronLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6" />
        </svg>
    );
}

function CirclePlusIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <path d="M8 12h8" />
            <path d="M12 8v8" />
        </svg>
    );
}

function HomeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    );
}

function LineChartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 3v18h18" />
            <path d="m19 9-5 5-4-4-3 3" />
        </svg>
    );
}

function Package2Icon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
            <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
            <path d="M12 3v6" />
        </svg>
    );
}

function PackageIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m7.5 4.27 9 5.15" />
            <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
            <path d="m3.3 7 8.7 5 8.7-5" />
            <path d="M12 22V12" />
        </svg>
    );
}

function PanelLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M9 3v18" />
        </svg>
    );
}

function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}

function SettingsIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    );
}

function ShoppingCartIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    );
}

function UploadIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    );
}

function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    );
}
