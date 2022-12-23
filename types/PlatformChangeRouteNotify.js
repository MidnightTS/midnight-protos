"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformChangeRouteNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlatformInfo_1 = require("./PlatformInfo");
// @generated message type with reflection information, may provide speed optimized methods
class PlatformChangeRouteNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlatformChangeRouteNotify", [
            { no: 13, name: "scene_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "platform", kind: "message", T: () => PlatformInfo_1.PlatformInfo },
            { no: 8, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { sceneTime: 0, entityId: 0 };
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
                case /* uint32 scene_time */ 13:
                    message.sceneTime = reader.uint32();
                    break;
                case /* PlatformInfo platform */ 14:
                    message.platform = PlatformInfo_1.PlatformInfo.internalBinaryRead(reader, reader.uint32(), options, message.platform);
                    break;
                case /* uint32 entity_id */ 8:
                    message.entityId = reader.uint32();
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
        /* uint32 scene_time = 13; */
        if (message.sceneTime !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.sceneTime);
        /* PlatformInfo platform = 14; */
        if (message.platform)
            PlatformInfo_1.PlatformInfo.internalBinaryWrite(message.platform, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 entity_id = 8; */
        if (message.entityId !== 0)
            writer.tag(8, runtime_1.WireType.Varint).uint32(message.entityId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlatformChangeRouteNotify
 */
exports.PlatformChangeRouteNotify = new PlatformChangeRouteNotify$Type();
