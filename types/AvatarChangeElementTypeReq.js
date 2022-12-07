"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarChangeElementTypeReq = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AvatarChangeElementTypeReq$Type extends runtime_5.MessageType {
    constructor() {
        super("AvatarChangeElementTypeReq", [
            { no: 12, name: "area_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "scene_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { areaId: 0, sceneId: 0 };
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
                case /* uint32 area_id */ 12:
                    message.areaId = reader.uint32();
                    break;
                case /* uint32 scene_id */ 3:
                    message.sceneId = reader.uint32();
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
        /* uint32 area_id = 12; */
        if (message.areaId !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.areaId);
        /* uint32 scene_id = 3; */
        if (message.sceneId !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.sceneId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message AvatarChangeElementTypeReq
 */
exports.AvatarChangeElementTypeReq = new AvatarChangeElementTypeReq$Type();
