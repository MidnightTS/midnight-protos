"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetGachaInfoRsp = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const GachaInfo_1 = require("./GachaInfo");
// @generated message type with reflection information, may provide speed optimized methods
class GetGachaInfoRsp$Type extends runtime_5.MessageType {
    constructor() {
        super("GetGachaInfoRsp", [
            { no: 14, name: "retcode", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 6, name: "daily_gacha_times", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 10, name: "gacha_info_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GachaInfo_1.GachaInfo },
            { no: 4, name: "Unk3300_OHFMHIHJHPJ", kind: "scalar", jsonName: "Unk3300OHFMHIHJHPJ", T: 8 /*ScalarType.BOOL*/ },
            { no: 9, name: "gacha_random", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "Unk3300_HBILIAEIHNK", kind: "scalar", jsonName: "Unk3300HBILIAEIHNK", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { retcode: 0, dailyGachaTimes: 0, gachaInfoList: [], unk3300OHFMHIHJHPJ: false, gachaRandom: 0, unk3300HBILIAEIHNK: false };
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
                case /* int32 retcode */ 14:
                    message.retcode = reader.int32();
                    break;
                case /* uint32 daily_gacha_times */ 6:
                    message.dailyGachaTimes = reader.uint32();
                    break;
                case /* repeated GachaInfo gacha_info_list */ 10:
                    message.gachaInfoList.push(GachaInfo_1.GachaInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool Unk3300_OHFMHIHJHPJ = 4 [json_name = "Unk3300OHFMHIHJHPJ"];*/ 4:
                    message.unk3300OHFMHIHJHPJ = reader.bool();
                    break;
                case /* uint32 gacha_random */ 9:
                    message.gachaRandom = reader.uint32();
                    break;
                case /* bool Unk3300_HBILIAEIHNK = 3 [json_name = "Unk3300HBILIAEIHNK"];*/ 3:
                    message.unk3300HBILIAEIHNK = reader.bool();
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
        /* int32 retcode = 14; */
        if (message.retcode !== 0)
            writer.tag(14, runtime_1.WireType.Varint).int32(message.retcode);
        /* uint32 daily_gacha_times = 6; */
        if (message.dailyGachaTimes !== 0)
            writer.tag(6, runtime_1.WireType.Varint).uint32(message.dailyGachaTimes);
        /* repeated GachaInfo gacha_info_list = 10; */
        for (let i = 0; i < message.gachaInfoList.length; i++)
            GachaInfo_1.GachaInfo.internalBinaryWrite(message.gachaInfoList[i], writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool Unk3300_OHFMHIHJHPJ = 4 [json_name = "Unk3300OHFMHIHJHPJ"]; */
        if (message.unk3300OHFMHIHJHPJ !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.unk3300OHFMHIHJHPJ);
        /* uint32 gacha_random = 9; */
        if (message.gachaRandom !== 0)
            writer.tag(9, runtime_1.WireType.Varint).uint32(message.gachaRandom);
        /* bool Unk3300_HBILIAEIHNK = 3 [json_name = "Unk3300HBILIAEIHNK"]; */
        if (message.unk3300HBILIAEIHNK !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.unk3300HBILIAEIHNK);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message GetGachaInfoRsp
 */
exports.GetGachaInfoRsp = new GetGachaInfoRsp$Type();
