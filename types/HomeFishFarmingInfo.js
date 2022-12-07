"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeFishFarmingInfo = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class HomeFishFarmingInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("HomeFishFarmingInfo", [
            { no: 13, name: "fish_id_list", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "fishpond_guid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { fishIdList: [], fishpondGuid: 0 };
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
                case /* repeated uint32 fish_id_list */ 13:
                    if (wireType === runtime_2.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.fishIdList.push(reader.uint32());
                    else
                        message.fishIdList.push(reader.uint32());
                    break;
                case /* uint32 fishpond_guid */ 5:
                    message.fishpondGuid = reader.uint32();
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
        /* repeated uint32 fish_id_list = 13; */
        if (message.fishIdList.length) {
            writer.tag(13, runtime_2.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.fishIdList.length; i++)
                writer.uint32(message.fishIdList[i]);
            writer.join();
        }
        /* uint32 fishpond_guid = 5; */
        if (message.fishpondGuid !== 0)
            writer.tag(5, runtime_2.WireType.Varint).uint32(message.fishpondGuid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_1.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message HomeFishFarmingInfo
 */
exports.HomeFishFarmingInfo = new HomeFishFarmingInfo$Type();
