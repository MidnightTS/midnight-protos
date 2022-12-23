"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlantFlowerGiveFriendFlowerRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class PlantFlowerGiveFriendFlowerRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("PlantFlowerGiveFriendFlowerRsp", [
            { no: 12, name: "limit_flower_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "schedule_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 14, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value) {
        const message = { limitFlowerList: [], scheduleId: 0, retcode: 0 };
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
                case /* repeated uint32 limit_flower_list */ 12:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.limitFlowerList.push(reader.uint32());
                    else
                        message.limitFlowerList.push(reader.uint32());
                    break;
                case /* uint32 schedule_id */ 10:
                    message.scheduleId = reader.uint32();
                    break;
                case /* int32 retcode */ 14:
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
        /* repeated uint32 limit_flower_list = 12; */
        if (message.limitFlowerList.length) {
            writer.tag(12, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.limitFlowerList.length; i++)
                writer.uint32(message.limitFlowerList[i]);
            writer.join();
        }
        /* uint32 schedule_id = 10; */
        if (message.scheduleId !== 0)
            writer.tag(10, runtime_2.WireType.Varint).uint32(message.scheduleId);
        /* int32 retcode = 14; */
        if (message.retcode !== 0)
            writer.tag(14, runtime_2.WireType.Varint).int32(message.retcode);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlantFlowerGiveFriendFlowerRsp
 */
exports.PlantFlowerGiveFriendFlowerRsp = new PlantFlowerGiveFriendFlowerRsp$Type();
