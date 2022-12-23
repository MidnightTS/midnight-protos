"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCGStartChallengeByCheckRewardRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GCGLevelType_1 = require("./GCGLevelType");
// @generated message type with reflection information, may provide speed optimized methods
class GCGStartChallengeByCheckRewardRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GCGStartChallengeByCheckRewardRsp", [
            { no: 3, name: "exceeded_item_type_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "level_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 8, name: "exceeded_item_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "level_type", kind: "enum", T: () => ["GCGLevelType", GCGLevelType_1.GCGLevelType] },
            { no: 9, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { exceededItemTypeList: [], levelId: 0, exceededItemList: [], levelType: 0, configId: 0, retcode: 0 };
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
                case /* repeated uint32 exceeded_item_type_list */ 3:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exceededItemTypeList.push(reader.uint32());
                    else
                        message.exceededItemTypeList.push(reader.uint32());
                    break;
                case /* uint32 level_id */ 5:
                    message.levelId = reader.uint32();
                    break;
                case /* repeated uint32 exceeded_item_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.exceededItemList.push(reader.uint32());
                    else
                        message.exceededItemList.push(reader.uint32());
                    break;
                case /* GCGLevelType level_type */ 2:
                    message.levelType = reader.int32();
                    break;
                case /* uint32 config_id */ 9:
                    message.configId = reader.uint32();
                    break;
                case /* int32 retcode */ 12:
                    message.retcode = reader.int32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_1.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated uint32 exceeded_item_type_list = 3; */
        if (message.exceededItemTypeList.length) {
            writer.tag(3, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exceededItemTypeList.length; i++)
                writer.uint32(message.exceededItemTypeList[i]);
            writer.join();
        }
        /* uint32 level_id = 5; */
        if (message.levelId !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.levelId);
        /* repeated uint32 exceeded_item_list = 8; */
        if (message.exceededItemList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.exceededItemList.length; i++)
                writer.uint32(message.exceededItemList[i]);
            writer.join();
        }
        /* GCGLevelType level_type = 2; */
        if (message.levelType !== 0)
            writer.tag(2, runtime_2.WireType.Varint).int32(message.levelType);
        /* uint32 config_id = 9; */
        if (message.configId !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.configId);
        /* int32 retcode = 12; */
        if (message.retcode !== 0)
            writer.tag(12, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GCGStartChallengeByCheckRewardRsp
 */
exports.GCGStartChallengeByCheckRewardRsp = new GCGStartChallengeByCheckRewardRsp$Type();
