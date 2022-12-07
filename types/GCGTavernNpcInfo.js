"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGTavernNpcInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GCGTavernNpcInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGTavernNpcInfo", [
            { no: 9, name: "id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 15, name: "scene_point_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { id: 0, scenePointId: 0, levelId: 0 };
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
                case /* uint32 id */ 9:
                    message.id = reader.uint32();
                    break;
                case /* uint32 scene_point_id */ 15:
                    message.scenePointId = reader.uint32();
                    break;
                case /* uint32 level_id */ 6:
                    message.levelId = reader.uint32();
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
        /* uint32 id = 9; */
        if (message.id !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.id);
        /* uint32 scene_point_id = 15; */
        if (message.scenePointId !== 0)
            writer.tag(15, runtime_1.WireType.Varint).uint32(message.scenePointId);
        /* uint32 level_id = 6; */
        if (message.levelId !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.levelId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGTavernNpcInfo
 */
exports.GCGTavernNpcInfo = new GCGTavernNpcInfo$Type();
