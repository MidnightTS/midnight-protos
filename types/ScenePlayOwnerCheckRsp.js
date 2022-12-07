"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenePlayOwnerCheckRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ScenePlayOwnerCheckRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ScenePlayOwnerCheckRsp", [
            { no: 1, name: "wrong_uid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 6, name: "param_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 7, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 14, name: "is_skip_match", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "play_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { wrongUid: 0, paramList: [], retcode: 0, isSkipMatch: false, playId: 0 };
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
                case /* uint32 wrong_uid */ 1:
                    message.wrongUid = reader.uint32();
                    break;
                case /* repeated uint32 param_list */ 6:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.paramList.push(reader.uint32());
                    else
                        message.paramList.push(reader.uint32());
                    break;
                case /* int32 retcode */ 7:
                    message.retcode = reader.int32();
                    break;
                case /* bool is_skip_match */ 14:
                    message.isSkipMatch = reader.bool();
                    break;
                case /* uint32 play_id */ 4:
                    message.playId = reader.uint32();
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
        /* uint32 wrong_uid = 1; */
        if (message.wrongUid !== 0)
            writer.tag(1, runtime_2.WireType.Varint).uint32(message.wrongUid);
        /* repeated uint32 param_list = 6; */
        if (message.paramList.length) {
            writer.tag(6, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.paramList.length; i++)
                writer.uint32(message.paramList[i]);
            writer.join();
        }
        /* int32 retcode = 7; */
        if (message.retcode !== 0)
            writer.tag(7, runtime_2.WireType.Varint).int32(message.retcode);
        /* bool is_skip_match = 14; */
        if (message.isSkipMatch !== false)
            writer.tag(14, runtime_2.WireType.Varint).bool(message.isSkipMatch);
        /* uint32 play_id = 4; */
        if (message.playId !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.playId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ScenePlayOwnerCheckRsp
 */
exports.ScenePlayOwnerCheckRsp = new ScenePlayOwnerCheckRsp$Type();
