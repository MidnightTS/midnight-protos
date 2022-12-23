"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForceDragAvatarNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const MotionInfo_1 = require("./MotionInfo");
// @generated message type with reflection information, may provide speed optimized methods
class ForceDragAvatarNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("ForceDragAvatarNotify", [
            { no: 3, name: "Unk3300_IMFNNPGHKJJ", kind: "scalar", jsonName: "Unk3300IMFNNPGHKJJ", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 9, name: "motion_info", kind: "message", T: () => MotionInfo_1.MotionInfo },
            { no: 7, name: "is_first_valid", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 12, name: "scene_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "entity_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "Unk3300_AFLCLLFDPBD", kind: "scalar", jsonName: "Unk3300AFLCLLFDPBD", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { unk3300IMFNNPGHKJJ: 0n, isFirstValid: false, sceneTime: 0, entityId: 0, unk3300AFLCLLFDPBD: 0n };
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
                case /* uint64 Unk3300_IMFNNPGHKJJ = 3 [json_name = "Unk3300IMFNNPGHKJJ"];*/ 3:
                    message.unk3300IMFNNPGHKJJ = reader.uint64().toBigInt();
                    break;
                case /* MotionInfo motion_info */ 9:
                    message.motionInfo = MotionInfo_1.MotionInfo.internalBinaryRead(reader, reader.uint32(), options, message.motionInfo);
                    break;
                case /* bool is_first_valid */ 7:
                    message.isFirstValid = reader.bool();
                    break;
                case /* uint32 scene_time */ 12:
                    message.sceneTime = reader.uint32();
                    break;
                case /* uint32 entity_id */ 10:
                    message.entityId = reader.uint32();
                    break;
                case /* uint64 Unk3300_AFLCLLFDPBD = 5 [json_name = "Unk3300AFLCLLFDPBD"];*/ 5:
                    message.unk3300AFLCLLFDPBD = reader.uint64().toBigInt();
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
        /* uint64 Unk3300_IMFNNPGHKJJ = 3 [json_name = "Unk3300IMFNNPGHKJJ"]; */
        if (message.unk3300IMFNNPGHKJJ !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.unk3300IMFNNPGHKJJ);
        /* MotionInfo motion_info = 9; */
        if (message.motionInfo)
            MotionInfo_1.MotionInfo.internalBinaryWrite(message.motionInfo, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_first_valid = 7; */
        if (message.isFirstValid !== false)
            writer.tag(7, runtime_1.WireType.Varint).bool(message.isFirstValid);
        /* uint32 scene_time = 12; */
        if (message.sceneTime !== 0)
            writer.tag(12, runtime_1.WireType.Varint).uint32(message.sceneTime);
        /* uint32 entity_id = 10; */
        if (message.entityId !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.entityId);
        /* uint64 Unk3300_AFLCLLFDPBD = 5 [json_name = "Unk3300AFLCLLFDPBD"]; */
        if (message.unk3300AFLCLLFDPBD !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.unk3300AFLCLLFDPBD);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ForceDragAvatarNotify
 */
exports.ForceDragAvatarNotify = new ForceDragAvatarNotify$Type();
