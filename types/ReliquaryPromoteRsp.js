"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReliquaryPromoteRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ReliquaryPromoteRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("ReliquaryPromoteRsp", [
            { no: 8, name: "old_append_prop_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 9, name: "old_promote_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "cur_append_prop_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "target_reliquary_guid", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "cur_promote_level", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { oldAppendPropList: [], oldPromoteLevel: 0, curAppendPropList: [], retcode: 0, targetReliquaryGuid: 0n, curPromoteLevel: 0 };
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
                case /* repeated uint32 old_append_prop_list */ 8:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.oldAppendPropList.push(reader.uint32());
                    else
                        message.oldAppendPropList.push(reader.uint32());
                    break;
                case /* uint32 old_promote_level */ 9:
                    message.oldPromoteLevel = reader.uint32();
                    break;
                case /* repeated uint32 cur_append_prop_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.curAppendPropList.push(reader.uint32());
                    else
                        message.curAppendPropList.push(reader.uint32());
                    break;
                case /* int32 retcode */ 10:
                    message.retcode = reader.int32();
                    break;
                case /* uint64 target_reliquary_guid */ 6:
                    message.targetReliquaryGuid = reader.uint64().toBigInt();
                    break;
                case /* uint32 cur_promote_level */ 4:
                    message.curPromoteLevel = reader.uint32();
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
        /* repeated uint32 old_append_prop_list = 8; */
        if (message.oldAppendPropList.length) {
            writer.tag(8, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.oldAppendPropList.length; i++)
                writer.uint32(message.oldAppendPropList[i]);
            writer.join();
        }
        /* uint32 old_promote_level = 9; */
        if (message.oldPromoteLevel !== 0)
            writer.tag(9, runtime_2.WireType.Varint).uint32(message.oldPromoteLevel);
        /* repeated uint32 cur_append_prop_list = 13; */
        if (message.curAppendPropList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.curAppendPropList.length; i++)
                writer.uint32(message.curAppendPropList[i]);
            writer.join();
        }
        /* int32 retcode = 10; */
        if (message.retcode !== 0)
            writer.tag(10, runtime_2.WireType.Varint).int32(message.retcode);
        /* uint64 target_reliquary_guid = 6; */
        if (message.targetReliquaryGuid !== 0n)
            writer.tag(6, runtime_2.WireType.Varint).uint64(message.targetReliquaryGuid);
        /* uint32 cur_promote_level = 4; */
        if (message.curPromoteLevel !== 0)
            writer.tag(4, runtime_2.WireType.Varint).uint32(message.curPromoteLevel);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ReliquaryPromoteRsp
 */
exports.ReliquaryPromoteRsp = new ReliquaryPromoteRsp$Type();
