"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PBNavMeshTile = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PBNavMeshPoly_1 = require("./PBNavMeshPoly");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class PBNavMeshTile$Type extends runtime_5.MessageType {
    constructor() {
        super("PBNavMeshTile", [
            { no: 12, name: "vecs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Vector_1.Vector },
            { no: 13, name: "polys", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PBNavMeshPoly_1.PBNavMeshPoly }
        ]);
    }
    create(value) {
        const message = { vecs: [], polys: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated Vector vecs */ 12:
                    message.vecs.push(Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated PBNavMeshPoly polys */ 13:
                    message.polys.push(PBNavMeshPoly_1.PBNavMeshPoly.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated Vector vecs = 12; */
        for (let i = 0; i < message.vecs.length; i++)
            Vector_1.Vector.internalBinaryWrite(message.vecs[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated PBNavMeshPoly polys = 13; */
        for (let i = 0; i < message.polys.length; i++)
            PBNavMeshPoly_1.PBNavMeshPoly.internalBinaryWrite(message.polys[i], writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PBNavMeshTile
 */
exports.PBNavMeshTile = new PBNavMeshTile$Type();
