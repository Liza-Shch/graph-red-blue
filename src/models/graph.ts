type Graph = Record<string, Set<string>>;

const addEdge = (graph: Graph, vertix: string, node: string) => {
    graph[vertix] ??= new Set<string>();
    graph[vertix].add(node);
}

export const getGraph = (input: string): Graph | null => {
    const graph: Record<string, Set<string>> = {};
    const rawEdges = input.trim().split(/[,\n]/).map((str) => str.trim());
    for (const str of rawEdges) {
        if (str.match(/[^a-z\s-]/)) {
            return null;
        }

        const nodes = str.split('-');
        if (nodes.length < 2) {
            return null;
        }

        let headNode;
        for (const rawNode of nodes) {
            const node = rawNode.trim();
            if (node.length !== 1) {
                return null;
            }
            
            if (!headNode) {
                headNode = node;
            } else {
                addEdge(graph, headNode, node);
                addEdge(graph, node, headNode);
                headNode = node;
            }
        }
    };

    return graph;
};

export const checkGraphIsTwoColor = (graph: Graph): boolean => {
    const queue: string[] = [];
    const colors: Record<string, number> = {};
    const vertixes = Object.keys(graph);
    // graph with less than 2 nodes
    if (vertixes.length < 2) {
        return false;
    }

    const start = vertixes[0];
    colors[start] = -1;
    queue.push(start);

    while (queue.length > 0) {
        const vertix = queue.shift() as string;
        const color = colors[vertix] === 1 ? -1 : 1;
        let hasSameColor = false;

        graph[vertix].forEach((node) => {
            if (!colors[node]) {
                colors[node] = color;
                queue.push(node);
            } else {
                if (colors[node] === colors[vertix]) {
                    hasSameColor = true;
                }
            }
        });

        if (hasSameColor) {
            return false;
        }
    }

    // check if graph is connected
    return Object.keys(colors).length === vertixes.length;
};
