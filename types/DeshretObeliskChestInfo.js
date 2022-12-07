"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeshretObeliskChestInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const Vector_1 = require("./Vector");
// @generated message type with reflection information, may provide speed optimized methods
class DeshretObeliskChestInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("DeshretObeliskChestInfo", [
            { no: 9, name: "group_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "pos", kind: "message", T: () => Vector_1.Vector }
        ]);
    }
    create(value) {
        const message = { groupId: 0, configId: 0, sceneId: 0 };
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
                case /* uint32 group_id */ 9:
                    message.groupId = reader.uint32();
                    break;
                case /* uint32 config_id */ 8:
                    message.configId = reader.uint32();
                    break;
                case /* uint32 scene_id */ 7:
                    message.sceneId = reader.uint32();
                    break;
                case /* Vector pos */ 3:
                    message.pos = Vector_1.Vector.internalBinaryRead(reader, reader.uint32(), options, message.pos);
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
        /* uint32 group_id = 9; */
        if (message.groupId !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.groupId);
        /* uint32 config_id = 8; */
        if (message.configId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.configId);
        /* uint32 scene_id = 7; */
        if (message.sceneId !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.sceneId);
        /* Vector pos = 3; */
        if (message.pos)
            Vector_1.Vector.internalBinaryWrite(message.pos, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DeshretObeliskChestInfo
 */
exports.DeshretObeliskChestInfo = new DeshretObeliskChestInfo$Type();
