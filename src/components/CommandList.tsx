import * as React from 'react';
import './CommandList.css';


interface CommandData {
    Aliases: string[],
    Description: string,
    Usage: string
}
interface State {
    data: any,
    selected: string,
}

export default class CommandList extends React.Component<{}, State> {

    constructor(props: any) {
        super(props);
        this.loadData("https://raw.githubusercontent.com/Kwoth/NadekoBot/1.9/docs/cmds.json");
    }
    loadData(url: string) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                const data = JSON.parse(xhttp.responseText);
                this.setState({ data: data, selected: Object.keys(data)[0] });
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }

    getSelectedClass(key: string): string {
        if (this.state.selected == key)
            return 'selected';

        return '';
    }

    render() {
        if (this.state == null)
            return <div>Loading...</div>;

        const modules: any[] = [];

        for (var key in this.state.data) {
            const l = key;
            modules.push(<div
                className={"module-name " + this.getSelectedClass(l)}
                onClick={() => this.setState({ selected: l })}>
                {l}
            </div>);
        }

        const cmds: CommandData[] = this.state.data[this.state.selected];

        return (
            <div>
                <div className="modules">{modules}</div>
                <div className="commands">{cmds.map((x: CommandData) => <div className='command' key={x.Aliases[0]}>
                    <div className='aliases'>{x.Aliases[0]}</div>
                    <div className='description'>{x.Description}</div>
                    <div className='usage'>{x.Usage}</div>
                </div>)}</div>
            </div>
        );
    }
}
