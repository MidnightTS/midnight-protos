"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerOfferingDataNotify = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const PlayerOfferingData_1 = require("./PlayerOfferingData");
// @generated message type with reflection information, may provide speed optimized methods
class PlayerOfferingDataNotify$Type extends runtime_5.MessageType {
    constructor() {
        super("PlayerOfferingDataNotify", [
            { no: 11, name: "offering_data_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => PlayerOfferingData_1.PlayerOfferingData }
        ]);
    }
    create(value) {
        const message = { offeringDataList: [] };
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
                case /* repeated PlayerOfferingData offering_data_list */ 11:
                    message.offeringDataList.push(PlayerOfferingData_1.PlayerOfferingData.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated PlayerOfferingData offering_data_list = 11; */
        for (let i = 0; i < message.offeringDataList.length; i++)
            PlayerOfferingData_1.PlayerOfferingData.internalBinaryWrite(message.offeringDataList[i], writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message PlayerOfferingDataNotify
 */
exports.PlayerOfferingDataNotify = new PlayerOfferingDataNotify$Type();
