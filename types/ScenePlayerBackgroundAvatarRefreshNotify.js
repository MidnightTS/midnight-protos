"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayerBackgroundAvatarRefreshNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const SceneEntityInfo_1 = require("./SceneEntityInfo");
const VisionType_1 = require("./VisionType");
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayerBackgroundAvatarRefreshNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ScenePlayerBackgroundAvatarRefreshNotify", [
            { no: 7, name: "param", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "appear_type", kind: "enum", T: () => ["VisionType", VisionType_1.VisionType, "VISION_TYPE_"] },
            { no: 12, name: "entity_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SceneEntityInfo_1.SceneEntityInfo }
        ]);
    }
    create(value) {
        const message = { param: 0, appearType: 0, entityList: [] };
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
                case /* uint32 param */ 7:
                    message.param = reader.uint32();
                    break;
                case /* VisionType appear_type */ 14:
                    message.appearType = reader.int32();
                    break;
                case /* repeated SceneEntityInfo entity_list */ 12:
                    message.entityList.push(SceneEntityInfo_1.SceneEntityInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 param = 7; */
        if (message.param !== 0)
            writer.tag(7, runtime_1.WireType.Varint).uint32(message.param);
        /* VisionType appear_type = 14; */
        if (message.appearType !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.appearType);
        /* repeated SceneEntityInfo entity_list = 12; */
        for (let i = 0; i < message.entityList.length; i++)
            SceneEntityInfo_1.SceneEntityInfo.internalBinaryWrite(message.entityList[i], writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ScenePlayerBackgroundAvatarRefreshNotify
 */
exports.ScenePlayerBackgroundAvatarRefreshNotify = new ScenePlayerBackgroundAvatarRefreshNotify$Type();
