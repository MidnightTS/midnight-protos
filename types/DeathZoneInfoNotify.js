"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeathZoneInfoNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const DeathZoneInfo_1 = require("./DeathZoneInfo");
// @generated message type with reflection information, may provide speed optimized methods
class DeathZoneInfoNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("DeathZoneInfoNotify", [
            { no: 15, name: "death_zone_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => DeathZoneInfo_1.DeathZoneInfo }
        ]);
    }
    create(value) {
        const message = { deathZoneInfoList: [] };
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
                case /* repeated DeathZoneInfo death_zone_info_list */ 15:
                    message.deathZoneInfoList.push(DeathZoneInfo_1.DeathZoneInfo.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated DeathZoneInfo death_zone_info_list = 15; */
        for (let i = 0; i < message.deathZoneInfoList.length; i++)
            DeathZoneInfo_1.DeathZoneInfo.internalBinaryWrite(message.deathZoneInfoList[i], writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message DeathZoneInfoNotify
 */
exports.DeathZoneInfoNotify = new DeathZoneInfoNotify$Type();
