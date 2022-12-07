"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResinCardData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ResinCardData$Type extends runtime_5.MessageType {
    constructor() {
        super("ResinCardData", [
            { no: 10, name: "last_daily_reward_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "config_id", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 13, name: "expire_time", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 11, name: "remain_reward_days", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { lastDailyRewardTime: 0, configId: 0, expireTime: 0, remainRewardDays: 0 };
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
                case /* uint32 last_daily_reward_time */ 10:
                    message.lastDailyRewardTime = reader.uint32();
                    break;
                case /* uint32 config_id */ 2:
                    message.configId = reader.uint32();
                    break;
                case /* uint32 expire_time */ 13:
                    message.expireTime = reader.uint32();
                    break;
                case /* uint32 remain_reward_days */ 11:
                    message.remainRewardDays = reader.uint32();
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
        /* uint32 last_daily_reward_time = 10; */
        if (message.lastDailyRewardTime !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.lastDailyRewardTime);
        /* uint32 config_id = 2; */
        if (message.configId !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.configId);
        /* uint32 expire_time = 13; */
        if (message.expireTime !== 0)
            writer.tag(13, runtime_1.WireType.Varint).uint32(message.expireTime);
        /* uint32 remain_reward_days = 11; */
        if (message.remainRewardDays !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.remainRewardDays);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message ResinCardData
 */
exports.ResinCardData = new ResinCardData$Type();
