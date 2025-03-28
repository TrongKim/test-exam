export interface INavigate {
    url: string;
    name: string;
    child: { url: string; name: string; }[];
}